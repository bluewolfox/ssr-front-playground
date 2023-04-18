import { atom } from 'recoil';
import { M_Global } from '../models/global';

export const userRecoilState = atom<M_Global.I_User | null>({
  key: 'user',
  default: null,
});
export const configRecoilState = atom<M_Global.I_Config | null>({
  key: 'config',
  default: null,
});
