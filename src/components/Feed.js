import React from "react";
import { useState } from "react";
import "./Feed.css";

export default function Feed({ users, displayUsers, search }) {
  const [expand, setExpanded] = useState([]);
  const [following, setFollowing] = useState([]);

  const handleToggle = (id) => {
    if (!expand.includes(id)) {
      const selectedId = [...expand, id];
      setExpanded(selectedId);
    } else {
      const removeId = expand.filter((currId) => currId !== id);
      setExpanded(removeId);
    }
  };

  const handleFollowing = (id) => {
    if (!following.includes(id)) {
      setFollowing([...following, id]);
    } else {
      setFollowing(expand.filter((currid) => currid !== id));
    }
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
              <div className="user_toggle">
                <button onClick={() => handleToggle(user.id)}> {expand.includes(user.id) ? <img src="data:image/png;base64,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" alt="ok" /> : <img src="data:image/png;base64,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" alt="ok" />}</button>
                <button onClick={() => handleFollowing(user.id)}> {following.includes(user.id) ? <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAY1BMVEX///8AAADz8/Pv7++ZmZnW1tbr6+uTk5M9PT3l5eXR0dGMjIytra35+floaGhISEifn58XFxc1NTWFhYW8vLx4eHjFxcVDQ0NtbW1NTU1SUlIdHR1/f38SEhIuLi5fX18nJyfgAZGTAAACk0lEQVRoge3ZbXuCIBQG4FiruTZXmeXMaf3/X7kX50KD8wByYB94PkP3BZ7JwS0WKSkpKSkpKf8sp7f6+BxF3onvbKLJMexBDm/f5ND2oxCR7LEc0p7KQqyiyaFslSzaELZSDrLuJ43MX2t6WQje9zkli2M0WeyjyaKJJosDm/wC5OtDLLlYx5Iztj+t/yt30XZ7v4wlN2y1fQBywbZmJGdszxnKbLUdT/4A8jXabrdstY3W3FFy+bJz79eQTNX2w+V7xI5JrogKW577MW42lIk1PxfDqFcH+Qhk6nxetbdx9jZaM/XePo1G2tpozVQ39DoZa2cjOSNOjN3daBsbyVSFqU5YcxvK+r+qXD239CQTb5L8oplz8iJ3+uecZ9pZJvY7kKnapjopbCM5o06MPTUTPW8kU7W9WNBz6XUjeUt3BmA6Zc9b89epAebrz28k4673BH5BZ7+BeSa3WDcbyYVRH1bSP9KqvjMhuTK8YwD7em/PrG0p0zNzkma652jN5rL+e+Jv9uPDB+62VacPbqatbOvOmyFkv60IuDlI64ZybidDuxlsJFcOtxvQVRa9DSvM6eYOTv2uXC9XZyDXjndJ+G7swACrv6pxavTTIFTXC5JXs+SrdW37srM58td1U98lorjVtpR1gRFlXGtbtptYMm6ZlJm9231W9nIxr8Jm2DNrW87GTt76/B6GWsVRzn6/9YJ2jVGG7dottf/v2/cfOZQh75KuAa1iH/tuyCgG6654ZAP7zPaVGdnea9vYZpXJWvP6DlNF+29obyeGtc1W23KUe85Y28BmrjDCDibfPe9Au91ndP0OUmG3SFdgj92QWf7WXYeW/+ygz3nIT61dwtW2nM3hWIbf7ZSUlJSUlJRPkNYgwikBM30AAAAASUVORK5CYII=" alt="" /> : <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIkAiQMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAABwYIAf/EAD8QAAECAwIGEQMCBwEAAAAAAAABAgMEBQYRBwgSMVGBFxghMzZBVVZhcnSSlLLC0uITFHEykRYiI1KCosEV/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALgAAAAAAAAAAAAAAAAAAAAADWAAAAAAAAAAMfhPtl/Bln/uoMNkWdmH/Slob/05V16uddxIn/DYESxll/o0HrRvSBNY2Ei2Mad+7WvzjYl96MY/Jhp/gn8v7oXPA/b+NbGRmJWqNhtqcmiK90NLkjMXcR13Et+4vFm0nMJWMXLhdPdhXztA6KAAAAAAAAGsDUAAAAAAAAAIjjLbzQetG9JbiI4y280HrRvSBCysYuXC+e7CvnaScrGLlwvnuwr52gdFAAAAAAAADWBqAAAADH27wiUexiQ4M4kSZnYrcqHKwbsrJzZTlXcamf8AN2YwS4wELis8/wAUntAtoIjtgIfN53iviNsBD5vO8V8QLcRHGW3mhdaN6RtgYfN53iviYfCbhCbblkg1tOWT+0V67sXLysq7oTQBgysYuXC+e7CvnaSc12De2LbFVePUHSSzaRYCwshImRduot+ZdAHWgIjtgIfN53iviNsBD5vO8V8QLcCI7YCHzed4r4jbAwubz/FJ7QLcDA2FwqUa1022n/TiSNQciqyDFVFSLdnyXJnXoW43wAawNQAKAByRhUizUbCDXFnL8tsyrGIq5oaXIz/W5dZlDp7CTgtlLYzDajKTKSVTaxGOerMpkZEzZSZ0VM1+jUTpcA1ouKoU3vP9oEmBWNga0fKFN7z/AGjYGtHyhTe8/wBoEnBWNga0fKFN7z/aZW3VgalYpsmtSmJWKk0rkZ9BVW7Juz3omkDIgGjsTZCdtlUoshTo0CFEhQliudGVUS69E4k6QM4CsbA1o+UKb3n+0bA1o+UKb3n+0CTgrGwNaLlCm95/tGwNaLlCm95/tAm1AizUCuU+LIXrNsmYawUTjflJcn7naZKsHuB+DZypwqtWJtk5OQVvgQobbocN39y37rlTizInSVVMwAawNQAAAAAAAAAiOMtvNB60b0luIjjLbzQetG9IELKxi5cL57sK+dpJysYuXC+e7CvnaB0UAAAAAAAANYAAAAAAAAAAiOMtvNB60b0luIjjLbzQutG9IELKxi5cL57sK+dpJysYuXC+e7CvnaB0UAAAAAAAANYGoAAAAAAAAAYLDFY6ZtbZ2H/5rWuqEk9YsFird9VFS5zb9OZU/BvQBxZGotVgTv2UamzjJtVuSAsB2Wv4S7dL9gOsNPWclpqrVmEsCcm2JDhQHfqhw03b3aFVbtziROkquYXAAAAAAAAABrA1AANIAAaRoAAaRoAAaQAA0jQAA0gABpAAAaAAB4B//9k=" alt="o" />}</button>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <div className="users">{renderContent()}</div>
    </div>
  );
}
