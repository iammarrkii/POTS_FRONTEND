import React, { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Table, Collapse, Timeline, Card, Tag, Typography } from "antd";
const { Panel } = Collapse;
const { Text, Title } = Typography;

export interface IMasterList {
  state: any;
  setState: any;
}

const MasterList = (props: IMasterList) => {
  const { state, setState } = props;

  const columns = [
    {
      title: "Item No.",
      dataIndex: "itemno",
      key: "itemno"
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc"
    },
    {
      title: "Quantity",
      dataIndex: "qty",
      key: "qty"
    },
    {
      title: "Unit",
      dataIndex: "uom",
      key: "uom"
    },
    {
      title: "Unit Price",
      dataIndex: "price",
      key: "price"
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount"
    }
  ];

  return (
    <Fragment>
      <Collapse
        defaultActiveKey={["0"]}
        // onChange={callback}
        // expandIconPosition={expandIconPosition}
      >
        {state.POdata.map((data: any, index: any) => {
          return (
            <Panel
              header={`OTN ${data.id} by  ${data.supplier.name}`}
              key={index}
              extra={<Tag color={data.color}>{data.status}</Tag>}
            >
              <div className="panel">
                <div className="orderitemtable">
                  <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={() => console.log("LOAD MORE")}
                    // hasMore={!this.state.loading && this.state.hasMore}
                    useWindow={false}
                  >
                    <Table
                      title={() => {
                        return (
                          <div>
                            <Title level={4}> Order Details</Title>
                            <div className="tableTitledesc">
                              <div>
                                <Text>Address: </Text>
                                <br></br>
                                <Text>Deliver To: </Text>
                              </div>
                              <div>
                                <Text>{data.supplier.address}</Text>
                                <br></br>
                                <Text>{data.deliverTo}</Text>
                              </div>
                            </div>
                          </div>
                        );
                      }}
                      columns={columns}
                      dataSource={data.items}
                      pagination={false}
                    />
                  </InfiniteScroll>
                </div>
                <div className="history">
                  <Card
                    title="Status History"
                    bordered={true}
                    bodyStyle={{ width: 300, height: 270, overflow: "auto" }}
                  >
                    <InfiniteScroll
                      initialLoad={false}
                      pageStart={0}
                      loadMore={() => console.log("LOAD MORE")}
                      // hasMore={!this.state.loading && this.state.hasMore}
                      useWindow={false}
                    >
                      <Timeline>
                        <Timeline.Item>On The Way</Timeline.Item>
                        <Timeline.Item>Loaded in truck</Timeline.Item>
                        <Timeline.Item>Items Packed</Timeline.Item>
                        <Timeline.Item>Item Arrived on Plant</Timeline.Item>
                        <Timeline.Item>Item Arrived on Plant</Timeline.Item>
                        <Timeline.Item>Item Arrived on Plant</Timeline.Item>
                        <Timeline.Item>Item Arrived on Plant</Timeline.Item>
                        <Timeline.Item>Item Arrived on Plant</Timeline.Item>
                        <Timeline.Item>Item Arrived on Plant</Timeline.Item>
                        <Timeline.Item>Item Arrived on Plant</Timeline.Item>
                      </Timeline>
                    </InfiniteScroll>
                  </Card>
                </div>
              </div>
            </Panel>
          );
        })}
      </Collapse>
    </Fragment>
  );
};

export default MasterList;
