import { createElement, render } from 'rax';
import DriverUniversal from 'driver-universal';
import MyComponent from '../src/index';


render(<MyComponent />, document.body, { driver: DriverUniversal });
