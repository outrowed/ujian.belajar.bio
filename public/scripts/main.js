
import "./load-url-data.js";
import { reloadDataBinding, reloadDataBindingNested } from "../lib/element-data-binding.js";

reloadDataBinding(document.querySelector("title"));
reloadDataBindingNested(document.body);