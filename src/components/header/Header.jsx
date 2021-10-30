import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">
          Riset Opini Publik dan Kebijakan
        </span>
        <span className="headerTitleLg">
          populi
          <span>center</span>
        </span>
      </div>
      <img
        className="headerImg"
        src="/images/jkt.jpg"
        alt=""
      />
    </div>
  );
}
