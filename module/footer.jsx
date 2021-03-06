/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React */



'use strict';

/**
 * @require ./utils.js
 */
import {Utils} from "./utils.js";

export var TodoFooter = React.createClass({
  render () {
    var activeTodoWord = Utils.pluralize(this.props.count, 'item');
    var clearButton = null;

    if (this.props.completedCount > 0) {
      clearButton = (
        <button
          id="clear-completed"
          onClick={this.props.onClearCompleted}>
          Clear completed
        </button>
      );
    }

    // React idiom for shortcutting to `classSet` since it'll be used often
    var cx = React.addons.classSet;
    var nowShowing = this.props.nowShowing;
    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>{this.props.count}</strong> {activeTodoWord} left
        </span>
        <ul id="filters">
          <li>
            <a
              href="#/"
              className={cx({selected: nowShowing === app.ALL_TODOS})}>
              All
            </a>
          </li>
            {' '}
          <li>
            <a
              href="#/active"
              className={cx({selected: nowShowing === app.ACTIVE_TODOS})}>
              Active
            </a>
          </li>
            {' '}
          <li>
            <a
              href="#/completed"
              className={cx({selected: nowShowing === app.COMPLETED_TODOS})}>
              Completed
            </a>
          </li>
        </ul>
          {clearButton}
      </footer>
    );
  }
});
