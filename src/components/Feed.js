import React from "react";
import { useState } from "react";
import "./Feed.css";

export default function Feed({ users, displayUsers, search }) {
  const [expand, setExpanded] = useState([]);

  const handleToggle = (id) => {
    if (!expand.includes(id)) {
      const selectedId = [...expand, id];
      setExpanded(selectedId);
    } else {
      const removeId = expand.filter((currId) => currId !== id);
      setExpanded(removeId);
    }
  };

  const showAllimgs = () => {
    const allIds = users.map((user) => user.id);
    setExpanded(allIds);
  };

  const closeAllimgs = () => {
    setExpanded([]);
  };
  const renderContent = () => {
    if (displayUsers.length === 0) {
      return `No results for ${search}`;
    } else {
      return displayUsers.map((user) => {
        const photos = user.photos;
        return (
          <div className="userCard">
            <div className="gallery">
              {expand.includes(user.id) ? (
                <div className="gallery_pics">
                  {photos?.map((img, id) => (
                    <img key={id} src={img.photo} alt="img" />
                  ))}
                </div>
              ) : (
                <div className="gallery_pic">
                  <img src={photos[0].photo} alt="img" />
                </div>
              )}
            </div>{" "}
            <div className="userinfo">
              <div className="userinfo_left">
                <img src={user.pic} alt="img" />
                <p>{user.user_name}</p>
              </div>
              <div>
                <button onClick={() => handleToggle(user.id)}> {expand.includes(user.id) ? "- " : "+"}</button>
                <button onClick={() => handleToggle(user.id)}> {expand.includes(user.id) ? "- " : "+"}</button>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <div className="expand_toggle">
        <button onClick={showAllimgs}>
          <img src="data:image/png;base64,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" alt="gallery_mode" />
        </button>
        <button onClick={closeAllimgs}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO8AAADTCAMAAABeFrRdAAAAe1BMVEX///8AAACUlJRnZ2c1NTWfn5+RkZFkZGQoKCiXl5chISHu7u75+fnr6+vx8fG/v7/Nzc2MjIxXV1fk5OTDw8OEhIR1dXULCwt8fHxAQEDQ0NC2trbAwMBubm6qqqpbW1sXFxevr6/b29tISEhFRUUyMjIjIyMaGhpQUFDiG4OnAAAFZUlEQVR4nO3daVPiQBCAYQKCIAExHktUWI/V5f//wl0KjyRz9cx0z/RY/X6mcJ6SIySdZDSSJEmSJEmSJEny7GW/bc4KrT2/elj6YJezX1Xptc9Qbb3NvVakYOKb3MvEqwW8qq9yLxK1jYt7l3uFyF3aube514fevY37kHt1BK3N3HXutVH0avae514bSQ8m7kvuldH0ZPLucq+MqEc9t869Lqp+672XuddFlt6rfPceJmU2H0L0W1l/+g+ar0zvc/YNX6lT7aMGD7J8T7NvsN10q31Q/zF3iZeIW9+yAzxmlniFuPXfwufax4i33MSrJt5yE6+aeMtNvGritVRvpttJ00y2001NsN7YcL3182v3oa97dmRMb63ZKX/L7Ncjoneqao8tyNYeEpp3eabnVtUbp/0hWN57k/aY82BcupC8jmPDhh29GcLxWv+7rP7DKN6Vi1tVXN7DKF5lv67aO7EDGoZ35uZW1RW1BBaCdwnhcnlFI3iBRw/1+3pTF+8FH/v3mmyjKt67gHpZbFjGewEfzqfm9Bp30V7Ad+9nHD6xor0ek0rG+ZCERXs9xgxRvoLXcZum0V6PUSXDuIRX9dw+GOcq2js4+G+rjVnoqfq43hhwtBf88fz/h3/EOk/Vp78WAS7KW79/PFM4ONrbwr2xr+cvbsTv6YI+rzrccHDK7yP9NAy0+qL3ZIHgYrY3BtxQcLT3Gu69DlrhKYUbCI7/vaAuxNBFyPo+qv9qnjAEHO8dQ70RBxa13CBwvBf8Ayn855GBGwJG2J8zgXH1zw3JyA0AI3iB/+DgT6v6yfKsvmCM/bGgc5OCv3ytXG8wyv528+vtqydv50cOri8YxQv4Dg59NTu5nmCc42XOU0dDDxACuFV14/GESMdDHad0hG5JrmGnV3uAsY53b5DW0wvI9fkDaPMMq/fK0EXoexfM9QAjzqsYDhMG75X04MLBmPNIS8050bvgrUgvLhiMO2+2nvamdN6m4dNXnlwoGH2ecP242DVt2+wWlzEHBL25QDDTedEALuxLnqc3iAsCs/QGcp0XXRjx9C7DL1rjBDP0AudfwsD8vFFcJ5idN5LrAnPzRnMdYGZeBK4dzMvrMfxiy/Jzm5UXiWsDc/KicS1gRl5ErhnMx4vKNYKTeCHXx0PmmsApvDPAsSN0rgGcwHvcr+Ua3SDg6sH03tNuPDuYhKsFk3s/91rawERcHZja+z2+YwaTcTVgYm93WskEJuSql06l9faHs/RgUq7y44HUO5xF04E95pmCGqfzqqN3TXLu8CwRQq9u0nAIJuem8+oHK/tgem4yr2mOtAtOwE3lNY/NfoNTcBN5bSNKh5TcNF77RNYhITeJ1zWAdkjHTeF1z9sdknETeCHjhQ0eyBG5l9mV3qm9zLjUXm5cYi+/O46QevlxSb0MuZRejlxCL0sunZfpDWWovEy5VF6uXCIvWy6Nly+XxMuYS+FlfTsZfC9rLr6XNxfdy/m9ewzbCznhLWfYXvDp+5kSbyfxile8rBNvJ/GKV7ysE28n8YpXvKwTbyfxinfgDT/XPk3Y8977Ke8GVwPjc/5gmsSrJt5yE6+aeMtNvGriLTfxqvW96jmPBVX3LXfaBw1+8rG5V2RAg5lW/bVAhyeT8LuLMbDVcNhEf2EQ8BX4i+tF63XeDbXYDK+D3Muiamvwgm4QWmD6l7PHLSTL6mDg/tR/sOnfOwLdcaC4bHeESHb6arrsd1Nz3nGguBwbTR73sSoi58W4f9RWRwvYJK7TnZRN3ditPbY5cz9VAU3g9wy453mSoEdvC8/L6F/f7BfjMls8b8JvkCBJkiRJkiRJkiRJkiRJkiRh9A8p9Ih98W2VVAAAAABJRU5ErkJggg==" alt="skim_mode" />
        </button>
      </div>
      <div className="users">{renderContent()}</div>
    </div>
  );
}
