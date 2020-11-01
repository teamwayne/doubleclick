// Execute
import DCMTAGS from './floodlightSrc';
// import loadRules from '../utils/loadRules';

export const floodlightTag = (data) => {
  // loadRules();
  DCMTAGS.execute(data);
};