import Button from "../../Components/ElementorComponents/Button";
import TextEditor from "../../Components/ElementorComponents/TextEditor";
import EaelLoginRegister from "../../Components/ElementorComponents/EaelLoginRegister";

export const components = {
  "Text-Editor": TextEditor,
  "Button": Button,
  "Eael-Login-Register": EaelLoginRegister
};

export function ucwords(text) {
  let str = text.toLowerCase();
  return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, function (s) {
    return s.toUpperCase();
  });
}