import { Colors } from "../ts/Colors.ts";

function Footer() {
  const footItems = new Map<string, string>([
    ["O FIRMĚ", "index.html"],
    ["NEMOVITOSTI", "nemovitosti.html"],
    ["VIDEOPROHLÍDKY", ""],
    ["NOVINKY", ""],
    ["REFERENCE", ""],
    ["PODMÍNKY", ""],
  ]);

  return (
    <footer>
      <ul className="menulist" style={{ backgroundColor: Colors.grey }}>
        {Array.from(footItems, ([item, link]) => (
          <li key={item} className="menulist">
            <a href={link}>{item}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
