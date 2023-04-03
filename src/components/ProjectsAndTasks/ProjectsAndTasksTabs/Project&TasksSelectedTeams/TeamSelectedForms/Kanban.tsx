import React, { useState } from "react";
import { Col, Row, Card, Collapse, Space, Image } from "antd";
import kanbanIcon from "../../../../../assets/icons/settings/projectandtasks/kanbanIcon.svg";
import "./Kanban.scss";
import { kanbanCardsData } from "../../../../../mock/kanbanData";


export const Kanban = () => {
  const { Panel } = Collapse;

  const getCardsByTitle = (title: string) =>
    kanbanCardsData
      .filter((item) => item.title === title)
      .map((item) => (
        <div
          key={item.id}
          className="d-flex justify-between align-items-center kanban-card"
        >
          <p>{item.child[0].asd}</p>
          <Image src={item.child[0].image1} alt="" />
        </div>
      ));

  const completedData = kanbanCardsData.filter(data => data.title === "Completed");
  const weekData = completedData.reduce((acc, curr) => {
    if (curr.child && curr.child.length) {
      curr.child.forEach((child: any) => {
        if (child.weekData && child.weekData.length) {
          acc.push(child.weekData);
        }
      });
    }
    return acc;
  }, []);
  const totalWeekObjects = weekData.reduce((acc: any, curr: any) => acc + curr.length, 0);


  const TitleCount = (title: string) => {
    return kanbanCardsData.filter((ele: any) => ele.title === title).length
  }





  return (
    <div className="wrap-kanban">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="row-kanban">
      <Col className="gutter-row" xs={24} md={12}lg={12} xl={8} xxl={6} sm={12}>
          <div className="column-kanban">
            <p className="title-todo fs-14 fw-400">To Do

              ( {TitleCount('To Do')})
            </p>
            <span>{getCardsByTitle("To Do")}</span>
          </div>
        </Col>
        <Col className="gutter-row" xs={24} md={12}lg={12} xl={8} xxl={6} sm={12}>
          <div className="column-kanban">
            <p  className="title-progress fs-14 fw-400">In Progress

              ( {TitleCount("In Progress")})
            </p>
            <span>{getCardsByTitle("In Progress")}</span>
          </div>
        </Col>
        <Col className="gutter-row" xs={24} md={12}lg={12} xl={8} xxl={6} sm={12}>
          <div className="column-kanban">
            <p className="title-review fs-14 fw-400">Review  ({TitleCount('Review')})</p>
            <span>{getCardsByTitle("Review")}</span>
            
          </div>
        </Col>
                
        <Col xs={24} md={12}lg={12} sm={12} xl={8} xxl={6}>
          <div className="column-kanban">
            <p  className="title-completed fs-14 fw-400">Completed
              ( {totalWeekObjects})
            </p>
            <Collapse >
              {completedData.map((data) => (
                data.child.map((weekData: any) => (
                  <Panel className="fs-14 fw-400" header={weekData.week} key={weekData.week} style={{background:"#2A9D8F",color:" #FFFFFF "}}>
                    {weekData.weekData.map((item: any) => (
                      <div key={item.abc} className="d-flex justify-between align-items-center kanban-card" >
                        <span>{item.asd}</span>
                        <img src={item.image1} alt="icon" />
                      </div>
                    ))}
                  </Panel>
                ))
              ))}
            </Collapse>

          </div>















        </Col>




      </Row>
    </div>
  );
};
