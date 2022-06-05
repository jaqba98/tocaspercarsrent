const navLinks = document.getElementById('navLinks');
const navHamburgerTopBar = document.getElementById('navHamburgerTopBar');
const navHamburgerMiddleBar = document.getElementById('navHamburgerMiddleBar');
const navHamburgerBottomBar = document.getElementById('navHamburgerBottomBar');
const navHamburger = document.getElementById('navHamburger');

const DeviceTypeEnum = {
  mobile: 'mobile',
  tablet: 'tablet',
  desktop: 'desktop'
};

let menuOpen = false;
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
  menuOpen = false;
  navLinks.style.animation = "navListClose 0s forwards";
  navHamburgerTopBar.style.animation = "navHamburgerTopBarClose 0s forwards";
  navHamburgerMiddleBar.style.animation = "navHamburgerMiddleBarClose 0s forwards";
}

const switchToTabletOrDesktop = () => {
  firstSwitchToMobile = true;
  menuOpen = true;
  navLinks.style.animation = "navListOpen 0s forwards";
  navHamburgerTopBar.style.animation = "navHamburgerTopBarOpen 0s forwards";
  navHamburgerMiddleBar.style.animation = "navHamburgerMiddleBarOpen 0s forwards";
}

navHamburger.addEventListener('click', () => {
  if (menuOpen) {
    menuOpen = false;
    navLinks.style.animation = "navListClose 0.5s forwards";
    navHamburgerTopBar.style.animation = "navHamburgerTopBarClose 0.5s forwards";
    navHamburgerMiddleBar.style.animation = "navHamburgerMiddleBarClose 0.5s forwards";
  } else {
    menuOpen = true;
    navLinks.style.animation = "navListOpen 0.5s forwards";
    navHamburgerTopBar.style.animation = "navHamburgerTopBarOpen 0.5s forwards";
    navHamburgerMiddleBar.style.animation = "navHamburgerMiddleBarOpen 0.5s forwards";
  }
});
