import React from 'react';
import tesselLogo from '../assets/tesselLogo.svg';
import switcher from '../assets/switcher.svg';
import sidebar from '../assets/sidebar.svg';
import downArrow from '../assets/downArrow.svg';
import services from '../assets/services.svg';
import provisioning from '../assets/provisioning.svg';
import availability from '../assets/availability.svg';
import dataflix from '../assets/dataflix.svg';
import library from '../assets/library.svg';
import benchmark from '../assets/benchmark.svg';
import database from '../assets/database.svg';




// Reusable image component for the logo
export function TesselLogo(props) {
  return (
    <img
      src={tesselLogo}
      alt="Tessell Logo"
      {...props}
      className={`tessell-logo ${props.className || ''}`}
    />
  );
}

// Reusable image component for the switcher icon
export function Switcher(props) {
  return (
    <img
      src={switcher}
      alt="Switcher"
      {...props}
      className={`switcher{
 ${props.className || ''}`}
    />
  );
}

// Reusable image component for the sidebar toggle icon
export function SideButton(props) {
  return (
    <img
      src={sidebar}
      alt="Sidebar Toggle"
      {...props}
      className={`sideButton`}
    />
  );
}

export function DownArrow(props) {
  return (
    <img
      src={downArrow}
      alt="Sidebar Toggle"
      {...props}
      className={`downarrow`}
    />
  );
}

export function MyService(props) {
  return (
    <img
      src={services}
      alt="Sidebar Toggle"
      {...props}
      className={`downarrow`}
    />
  );
}
export function Provisioning(props) {
  return (
    <img
      src={provisioning}
      alt="Sidebar Toggle"
      {...props}
      className={`downarrow`}
    />
  );
}
export function Availability(props) {
  return (
    <img
      src={availability}
      alt="Sidebar Toggle"
      {...props}
      className={`downarrow`}
    />
  );
}
export function Dataflix(props) {
  return (
    <img
      src={dataflix}
      alt="Sidebar Toggle"
      {...props}
      className={`downarrow`}
    />
  );
}
export function Library(props) {
  return (
    <img
      src={library}
      alt="Sidebar Toggle"
      {...props}
      className={`downarrow`}
    />
  );
}
export function Benchmark(props) {
  return (
    <img
      src={benchmark}
      alt="Sidebar Toggle"
      {...props}
      className={`downarrow`}
    />
  );
}

export function Database(props) {
  return (
    <img
      src={database}
      alt="Sidebar Toggle"
      {...props}
      className={`downarrow`}
    />
  );
}
