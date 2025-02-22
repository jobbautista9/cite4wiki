/* This file is part of Cite4Wiki.

   Cite4Wiki is free software: you can redistribute it and/or modify
   it under the terms of the GNU Lesser General Public License as
   published by the Free Software Foundation, either version 3 of
   the License, or (at your option) any later version.

   Cite4Wiki is distributed in the hope that it will be useful, but
   WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
   Lesser General Public License for more details.

   You should have received a copy of the GNU Lesser General Public
   License along with Foobar. If not, see
   <https://www.gnu.org/licenses/>.
*/

function currentVerticalPref() {
 var BrwsrPrefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
 document.getElementById("cite4wiki-verticalpref").checked = BrwsrPrefs.getBoolPref("extensions.cite4wiki.vertical");
}

function setVerticalPref() {
 var BrwsrPrefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
 BrwsrPrefs.setBoolPref("extensions.cite4wiki.vertical", document.getElementById("cite4wiki-verticalpref").checked);
}