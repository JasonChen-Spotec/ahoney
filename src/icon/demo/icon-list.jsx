import * as icons from '../../icons';
import './index.less';

const iconListData = Object.keys(icons).map(key=> ({
  component: icons[key],
  name: key
}));

const IonList = {
  functional: true,

  render() {
    return (
      <div class="icon-container">
        {
          iconListData.map(({component: IconItem, name}, index)=>(
            (
              <div class="icon-item">
                <div><IconItem key={index} /></div>
                <div>{name}</div>
              </div>

            )
          ))
        }
      </div>
    )

  },
};
export default IonList;
