import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Logo showing a moneybag" />
      <h1>Invenstment Caculator</h1>
    </header>
  );
}
