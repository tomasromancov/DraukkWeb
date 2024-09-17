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
      <ul className="menulist" style={{ backgroundColor: "#898989" }}>
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
