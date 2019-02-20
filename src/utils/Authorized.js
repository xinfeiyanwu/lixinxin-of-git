import RenderAuthorized from '@/components/Authorized';
import { getAuthority } from './authority';//获取权限值和设置权限值

let Authorized = RenderAuthorized(getAuthority()); // eslint-disable-line

// Reload the rights component
const reloadAuthorized = () => {
  Authorized = RenderAuthorized(getAuthority());
};

export { reloadAuthorized };
export default Authorized;
