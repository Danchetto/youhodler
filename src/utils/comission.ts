import config from '../config';

const addComission = (price: number) => {
  return price + price * +config.SERVICE_COMISSION;
};

export default addComission;
