export default function LinksArea({ className, heading, linkList = [] }) {
  return (
    <div className={className}>
      <div className="mb-10 w-full">
        <h4 className="mb-9 text-lg font-semibold text-white">{heading}</h4>
        <ul>
          {linkList.map((link, index) => (
            <li key={index}>
              <a
                href=""
                className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
