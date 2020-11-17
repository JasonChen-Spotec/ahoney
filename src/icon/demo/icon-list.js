import * as icons from '../../icons';

const iconListData = Object.keys(icons).map(key=> icons[key]);


const IonList = {
  functional: true,

  render() {
    return iconListData.map((IconItem, index)=>(
      <IconItem key={index} />
    ));
  },
};
export default IonList;
