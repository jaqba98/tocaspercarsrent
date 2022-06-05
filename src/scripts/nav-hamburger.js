const navLinks = document.getElementById('navLinks');
const navHamburger = document.getElementById('navHamburger');

const DeviceTypeEnum = {
  mobile: 'mobile',
  tablet: 'tablet',
  desktop: 'desktop'
};

let firstSwitchToMobile = true;

window.onload = () => {
  onLoad();
  onResize();
};
window.onresize = () => onResize();

const onLoad = () => {
  firstSwitchToMobile = true;
};

const onResize = () => {
  const deviceType = getDeviceType();
  if (deviceType === DeviceTypeEnum.mobile && firstSwitchToMobile) { switchToMobile(); }
  if (deviceType !== DeviceTypeEnum.mobile) { switchToTabletOrDesktop(); }
}

const getDeviceType = () => {
  const widthWidth = window.innerWidth;
  if (widthWidth <= 767) { return DeviceTypeEnum.mobile; }
  if (widthWidth >= 768 && widthWidth <= 1023) { return DeviceTypeEnum.tablet; }
  return DeviceTypeEnum.desktop;
}

const switchToMobile = () => {
  firstSwitchToMobile = false;
  navLinks.style.visibility = 'hidden';
}

const switchToTabletOrDesktop = () => {
  firstSwitchToMobile = true;
  navLinks.style.visibility = 'visible';
}

navHamburger.addEventListener('click', () => {
   navLinks.style.visibility= navLinks.style.visibility === 'visible' ? 'hidden' : 'visible';
});
