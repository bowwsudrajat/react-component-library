import isHostComponent from '@momo/utils/isHostComponent';

const shouldSpreadAdditionalProps = (Slot) => {
  return !Slot || !isHostComponent(Slot);
};

export default shouldSpreadAdditionalProps;
