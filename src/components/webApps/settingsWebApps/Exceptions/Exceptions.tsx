
import React, { useState } from "react";
import { Button, Col, Input, Row, Table, Popover, Select, Switch } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import AddExceptions from "../../../../assets/images/WebApp/AddExceptions.png";
import EditCategory from "../../../../assets/images/WebApp/allDelete.png";
import Dots from "../../../../assets/icons/dots.png";
import Edit from "../../../../assets/icons/edit.png";
import Bin from "../../../../assets/icons/delete.png";
import { data } from "../../../../mock/ExceptionsWebApps";
import { DataType } from "../../../../types/ExceptionsWebApps";
import type { ColumnsType } from "antd/es/table";
import './Exceptions.scss'

import ActionModal from "../../../../shared/actionModal/actionModal";
import DeleteIcon from "../../../../assets/icons/deleteIcon.svg";


const Exceptions = (props: any) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [addCategory, setAddCategory] = useState<boolean>(false);
  const [editCategory, setEditCategory] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [tableData, setTableData] = useState(data);

  const content = (
    <div className="popOverMenu p-0 m-0">
      <div className="cursor-pointer action_btns" onClick={() => setEditCategory(true)}>
        <img src={Edit} alt="edit_icon" height={14} /> <span>Edit</span>
      </div>
      <div className="cursor-pointer action_btns" onClick={() => { setDeleteModal(true) }}>
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
      title: "Name",
      dataIndex: "Name",
    },
    {
      title: "User",
      dataIndex: "User",
    },
    {
      title: "Services",
      dataIndex: "Services",
    },
    {
      title: "Productivity Status",
      dataIndex: "ProductivityStatus",
      width: "200px",
      render: (_, record) => (
        <>
          <div className={`ProductivityStatusExceptions ${record.ProductivityStatus === 'Neutral' ? 'NeutralStatus' : record.ProductivityStatus === 'Productive' ? 'ProductiveStatus' : record.ProductivityStatus === 'Unproductive' ? 'UnproductivelStatus' : "ProductivityStatusTagged"}`}>
            <Select value={record.ProductivityStatus || "Select Status"} onChange={(value) => handleSelectChange(value, record)} placeholder="Select Status" >
              {options.map(option => (<Select.Option key={option.value} value={option.value} style={{ backgroundColor: option.value === 'Neutral' ? '#EBEAEA' : option.value === 'Productive' ? '#D9FFDA' : option.value === 'Unproductive' ? '#FFCBCB' : "", borderRadius: '25px', width: 'fit-content', marginTop: "10px", color: option.value === 'Neutral' ? '#4E4B66' : option.value === 'Productive' ? '#0FBE16' : option.value === 'Unproductive' ? '#FF3737' : "" }}>
                {option.label}
              </Select.Option>))}
            </Select>
          </div>
        </>
      ),
    },
    {
      title: "Enable/Disable",
      dataIndex: "EnableDisable",
      render: () => (
        <Switch defaultChecked />
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div>
          <Popover showArrow={false} className="actions_popover" placement="bottomRight" content={content} trigger="click">
            <img src={Dots} className="cursor-pointer" alt="editCategory" />
          </Popover>
        </div>
      ),
    },
  ];

  const options = [
    {
      value: 'Neutral',
      label: 'Neutral',
    },
    {
      value: 'Productive',
      label: 'Productive',
    },
    {
      value: 'Unproductive',
      label: 'Unproductive',
    },
  ]
  const handleSelectChange = (value: any, selectedRecord: any) => {
    let temp = [...tableData]
    temp = temp.map((ele) => {
      if (ele.key == selectedRecord.key) {
        ele.ProductivityStatus = value
      }
      return ele
    })
    setTableData(temp)
  }


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
      <div style={{ marginBottom: 16 }} className="webAppExceptions">
        <div>
          <Row className="table_header">
            <Col md={12} className="btn-wrapper">
              {selectedRowKeys.length >= 1 && (
                <Button
                  className="all_del_btn d-flex align-items-center" onClick={() => { setDeleteModal(true) }}>
                  <img src={EditCategory} alt="EditCategory" />
                </Button>)}
              <Button
                className="add_btn b d-flex align-items-center"
                onClick={() => { setAddCategory(true) }}>
                <img src={AddExceptions} alt="AddCategory" /> <span> Add Exceptions</span>
              </Button>
            </Col>
            <Col md={4} className="search_wrapper">
              <Input prefix={<SearchOutlined />} placeholder="Search" />
            </Col>
          </Row>
        </div>
      </div>
      <Table scroll={{ x: 768 }} rowSelection={rowSelection} columns={columns} dataSource={data} className="wrapper-table" />
      <AddModal addCategory={addCategory} setAddCategory={setAddCategory} />
      <EditModal editCategory={editCategory} setEditCategory={setEditCategory} />
      {/* {deleteModal && <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} />} */}
      <ActionModal isModalOpen={deleteModal}
        setOpenModal={setDeleteModal}
        submitHandler={() => { }}
        actionClass='delete-btn-bg-color' actionText='Delete' mainText='Are you Sure? ' secondaryText=' Do you want to delete this?' image={DeleteIcon}
      />
    </div>
  )
}

export default Exceptions
