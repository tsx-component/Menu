import * as React from 'react';
import * as ReactDOM from "react-dom";
import { PropdType } from './PropdType';

export default class Menu extends React.Component<PropdType, {}> {
  static defaultProps = {
    isLoading: false,
    defaultIndex: 0,
  }

  state = {
    editing: false
  }

  render() {
    return (
      <>
        {
          this.state.editing && 
          (
            <div className="select-options">
              <ul className="select-selection__box">
                <li className="select-selection__option"
                    ng-repeat="option in $ctrl.typeOptions track by $ctrl.wrapTrackBy(option, $index)"
                    ng-class="$ctrl.getStateClass(option, $index)"
                    scroll-into-view="$index === $ctrl.activeIndex"
                    ng-bind="$ctrl.getLabel(option)"
                    ng-mouseenter="$ctrl.onMouserEnter($index)"
                    ng-mousedown="$ctrl.onClickOption(option, $event)"></li>
                <li className="select-selection__hold" ng-show="$ctrl.isLoading">
                  <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>
                  正在加载...
                </li>
                <li className="select-selection__hold"
                    ng-show="!$ctrl.isLoading && !$ctrl.typeOptions.length">无匹配数据</li>
              </ul>
            </div>
          )
        }
      </>
    )
  }
}

ReactDOM.render(
  <Menu />,
  document.getElementById('root') as HTMLElement
);