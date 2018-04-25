import * as React from 'react';
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';
import { PropsType } from './PropsType';
import '../assets/index.css';

interface State {
  activeIndex: number;
  selectedIndex: number;
  selectedOptions: any[];
}

export default class Menu extends React.Component<PropsType, State> {
  static defaultProps = {
    isLoading: false,
    defaultIndex: 0,
    options: [],
    font: 'fa',
  } as PropsType;

  static getDerivedStateFromProps(nextProps: PropsType, prevState: State) {
    return {
      selectedOptions: nextProps.options
    }
  }

  state = {
    activeIndex: 0,
    selectedIndex: -1,
    selectedOptions: [],
  }

  getLabel = () => {
    return '233';
  }

  wrapTrackBy = () => {
    return '';
  }

  onMenuMouseDown = (event: any, index: number) => {
    (event as MouseEvent).stopPropagation();
    this.setState({
      selectedIndex: index
    });
  }

  render() {
    const { isLoading, font } = this.props;
    const { selectedOptions, activeIndex } = this.state;
    return (
      <>
        {
          this.props.show && 
          (
            <div className="select-options">
              <ul className="select-selection__box">
                {
                  isLoading ? 
                  (
                    <li className="select-selection__load" ng-show="$ctrl.isLoading">
                      <i className={classNames(font, `${font}-spinner`, `${font}-spin`)} aria-hidden="true"></i>
                      正在加载...
                    </li>
                  )
                  : 
                  (
                    selectedOptions.length ?
                    selectedOptions.map((item, index, arr) => {
                      const isIncludes = selectedOptions.lastIndexOf(item) !== -1;
                      return (
                        <li
                          className={classNames('select-selection__option', {
                            'select-selection-item-active__selected': activeIndex === index && isIncludes
                          }, {
                            'select-selection-item-active': activeIndex === index && !isIncludes
                          }, {
                            'select-selection-item-selected': activeIndex !== index && isIncludes
                          })}
                          onMouseEnter={() => this.setState({ activeIndex: index })}
                          onMouseDown={(event) => this.onMenuMouseDown(event, index)}
                          key={this.wrapTrackBy()}
                        >{this.getLabel()}</li>
                      );
                    })
                    :
                    <li className="select-selection__hold">无匹配数据</li>
                  )
                }
              </ul>
            </div>
          )
        }
      </>
    )
  }
}

ReactDOM.render(
  <Menu options={['233']} defaultIndex={0} show={true} font='fa'/>,
  document.getElementById('root') as HTMLElement
);