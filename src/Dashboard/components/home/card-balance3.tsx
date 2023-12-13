import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";

export const CardBalance3 = () => {
  return (
    <Card className="xl:max-w-sm bg-success rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <Community />
          <div className="flex flex-col">
            <span className="text-white">Top #3</span>
            <span className="text-white text-xs">121 applied</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-white text-xl font-semibold">$3,910</span>
          <span className="text-success text-xs">total</span>
        </div>
        <div className="flex items-center gap-6">
          

          <div>
            <div>
              <span className="font-semibold text-danger text-xs">{"⭐"}</span>
              <span className="text-xs">125</span>
            </div>
            <span className="text-white text-xs">Saved</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
