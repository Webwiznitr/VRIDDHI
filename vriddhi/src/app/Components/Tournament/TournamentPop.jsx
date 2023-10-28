"use client";
import React, { useState } from "react";
import Image from "next/image";
import PopupModal from "../PopupModal/PopupModal";
import { Button, Typography, styled } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import CloseIcon from "@mui/icons-material/Close";

const Header = ({ message }) => {
  return <h2 className="text-xl md:text-3xl py-2">{message}</h2>;
};

const List = ({ message }) => {
  return (
    <ul className="list-disc pl-[14px] ml-3">
      {message.map((msg) => (
        <li key={msg} className="py-2 text-base md:text-lg">
          {msg}
        </li>
      ))}
    </ul>
  );
};

const renderRule = (rule) => {
  switch (rule.messageType) {
    case "header":
      return <Header message={rule.message} />;
    case "list":
      return <List message={rule.message} />;
  }
};

const Tournament = ({ className, src, tournamentName, rules = [] }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalClose = () => {
    setOpenModal(false);
  };
  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleOnClick = () => {
    handleModalClose();
  };
  const StyledButton = styled(Button)({
    float: "right",
    borderRadius: "33.6px",
    marginTop: "7px",
  });

  return (
    <>
      <PopupModal
        isOpen={openModal}
        onClose={handleModalClose}
        className="bg-[#10181F]"
      >
        <CloseIcon
          onClick={() => handleOnClick()}
          fontSize="large"
          className="float-right cursor-pointer pl-2 md:pl-0"
        />
        <h1 className="text-[#fff] text-2xl md:text-5xl text-center pb-4">
          RULE AND REGULATIONS
        </h1>
        {rules.map((rule) => renderRule(rule))}
        <a
          href={`/Rules/${tournamentName}.pdf`}
          download={`${tournamentName}.pdf`}
          className="p-2"
        >
          <StyledButton
            variant="contained"
            endIcon={<KeyboardDoubleArrowRightIcon />}
          >
            Read More
          </StyledButton>
        </a>
      </PopupModal>
      <div className={`section ${className}`} onClick={handleModalOpen}>
        <h3 className="sportname">{tournamentName}</h3>
        <div className="card">
          <Image src={src} alt=""></Image>
        </div>
      </div>
    </>
  );
};

export default Tournament;
