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
  menuOpen = false;
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
  closeMenu();
}

const switchToTabletOrDesktop = () => {
  firstSwitchToMobile = true;
  openMenu();
}

const closeMenu = (time = 0) => {
  menuOpen = false;
  navLinks.style.animation = `navListClose ${time}s forwards`;
  navHamburgerTopBar.style.animation = `navHamburgerTopBarClose ${time}s forwards`;
  navHamburgerMiddleBar.style.animation = `navHamburgerMiddleBarClose ${time}s forwards`;
  navHamburgerBottomBar.style.animation = `navHamburgerBottomBarClose ${time}s forwards`;
};

const openMenu = (time = 0) => {
  menuOpen = true;
  navLinks.style.animation = `navListOpen ${time}s forwards`;
  navHamburgerTopBar.style.animation = `navHamburgerTopBarOpen ${time}s forwards`;
  navHamburgerMiddleBar.style.animation = `navHamburgerMiddleBarOpen ${time}s forwards`;
  navHamburgerBottomBar.style.animation = `navHamburgerBottomBarOpen ${time}s forwards`;
};

navHamburger.addEventListener('click', () => {
  const deviceType = getDeviceType();
  if (deviceType !== DeviceTypeEnum.mobile) { return; }
  if (menuOpen) {
    closeMenu(0.5);
  } else {
    openMenu(0.5);
  }
});
