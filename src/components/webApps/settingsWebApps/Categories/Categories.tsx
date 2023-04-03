
import React, { useState } from "react";
import { Button, Col, Input, Row, Table, Popover } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import AddCategory from "../../../../assets/images/WebApp/AddCategory.png";
import EditCategory from "../../../../assets/images/WebApp/allDelete.png";
import Dots from "../../../../assets/icons/dots.png";
import Edit from "../../../../assets/icons/edit.png";
import Bin from "../../../../assets/icons/delete.png";
import { data } from "../../../../mock/CategoriesWebApps";
import { DataType } from "../../../../types/CategoriesWebApps";
import type { ColumnsType } from "antd/es/table";
import './Categories.scss'

const Categories = (props: any) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [addCategory, setAddCategory] = useState<boolean>(false);
    const [editCategory, setEditCategory] = useState<boolean>(false);
    const [deleteModal, setDeleteModal] = useState<boolean>(false);

    const content = (
        <div className="popOverMenu p-0 m-0">
          <div className="cursor-pointer action_btns" onClick={() => setEditCategory(true)}>
            <img src={Edit} alt="edit_icon" height={14} /> <span>Edit</span>
          </div>
          <div className="cursor-pointer action_btns" onClick={() => { setDeleteModal(true)}}>
            <img src={Bin} alt="delete_icn" height={14} /> <span>Delete</span>
          </div>
        </div>
      );
    
      const columns: ColumnsType<DataType> = [
        {
          title: "Sr.no",
          dataIndex: "Srno",
        },
        {
          title: "Category",
          dataIndex: "Category",
        },
        {
          title: "Services",
          dataIndex: "Services",
        },
        {
          title: "Action",
          dataIndex: "action",
          render: () => (
            <div>
              <Popover showArrow={false} className="actions_popover" placement="bottomRight" content={content} trigger="click">
                <img src={Dots} className="cursor-pointer" alt="editCategory"/>
              </Popover>
            </div>
          ),
        },
      ];
    
      const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log("selectedRowKeys changed: ", newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
      };
      const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
      };
    return (
        <div>
        <div style={{ marginBottom: 16 }} className="webAppCategories">
          <div>
            <Row className="table_header">
              <Col xs={24} md={12} className="btn-wrapper">
                {selectedRowKeys.length >= 1 && (
                  <Button 
                    className="all_del_btn d-flex align-items-center justify-center" onClick={() => {setDeleteModal(true)}}>  
                     <img src={EditCategory} alt="EditCategory" />
                     </Button>)}
                <Button
                  className="add_btn"
                  onClick={() => {setAddCategory(true)}}>
                  <img src={AddCategory} alt="AddCategory" /> <span> Add Category</span>
                </Button>
              </Col>
              <Col xs={24}  md={4} className="search_wrapper">
                <Input prefix={<SearchOutlined />} placeholder="Search" />
              </Col>
            </Row>
          </div>
        </div>
        <Table scroll={{ x: 768 }} rowSelection={rowSelection} columns={columns} dataSource={data} className="wrapper-table"/>
        {addCategory && <AddModal addCategory={addCategory} setAddCategory={setAddCategory}  />}
        {editCategory && <EditModal editCategory={editCategory} setEditCategory={setEditCategory}  />}
        {deleteModal && <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} />}
      </div>
    )
}

export default Categories
