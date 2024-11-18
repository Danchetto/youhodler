import config from '../config';

const addComission = (price: number) => {
  const percent = +config.SERVICE_COMISSION / 100;
  return price + price * percent;
};

export default addComission;
