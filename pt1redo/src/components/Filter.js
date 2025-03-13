import React, { useState } from "react";
import ItemCards from "./ItemCards";
import { Row, Col } from "react-bootstrap";

const SearchFilter = () => {
  const [search, setSearch] = useState("");
  const items = [
    { name: "Chao to ong", des: "Chảo siêu xịn, chống dính tự nhiên", avatar: "https://vn-test-11.slatic.net/p/6007ce8ab8cdaa42d40592fb1ce4caf7.jpg" },
    { name: "Chao chong dinh", des: "Chảo siêu xịn, chống dính tự nhiên", avatar: "https://elmich.vn/wp-content/uploads/2023/10/EL-5941SK24_Profile_01.jpg" },
    { name: "Quat tich dien", des: "Quạt tích điện siêu xịn", avatar: "https://salesman.vn/wp-content/uploads/2023/05/quat-tich-dien-koreno-kn-114.jpg" },
    { name: "May giat tu dong", des: "Máy giặt thông minh", avatar: "http://tongkhoxiaomi.com/wp-content/images/4/minij/may-giat-say-khu-trung-thong-minh-minij-a2000-10kg_3.jpg" },
    { name: "Ban ui hoi nuoc", des: "Bàn ủi hơi nước xịn xò, giá hợp lí", avatar: "https://media.loveitopcdn.com/20756/ban-ui-hoi-nuoc-cong-nghiep-pen-520.jpg" },
    { name: "Ban ui truyen thong", des: "Bàn ủi truyền thống, giá hợp lí", avatar: "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/KNMS/cau-tao-cua-ban-ui-dien.jpg" }
  ];

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", textAlign: "center", backgroundColor: "blueviolet" }}>
      <label>
        <strong>Search: </strong>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginLeft: "10px", padding: "5px" }}
        />
      </label>

      {filteredItems.length > 0 ? (
        <div>
          <Row style={{ listStyleType: "none", padding: 0 }}>
            {filteredItems.map((item, index) => (

              <Col key={index} style={{ fontSize: "20px", marginTop: "5px" }}>
                <ItemCards item={item} />
              </Col>

            ))}
          </Row>
        </div>

      ) : (<p>There's no item with this name !</p>)}


    </div>
  );
};

export default SearchFilter;
