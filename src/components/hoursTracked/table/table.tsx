import { Table } from "antd";

const HoursTrackedTable = (props: any) => {
  const { tableColumns, tableDataSourse, isPagination } = props;

  return (
    <Table
      className="ant-table-content card-bg-color"
      columns={tableColumns}
      // rowSelection={rowSelection}
      dataSource={tableDataSourse}
      pagination={isPagination}
    />
  );
};

export default HoursTrackedTable;
