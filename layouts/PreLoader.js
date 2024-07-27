"use client";
import { daltechutility } from "@/utility";
import { useEffect } from "react";

const PreLoader = () => {
  useEffect(() => {
    daltechutility.preloader();
  }, []);

  return (
    <div id="preloader" className="preloader">
      <div className="animation-preloader">
        <div className="spinner"></div>
        <div className="txt-loading">
          <span data-text-preloader="M" className="letters-loading">
            M
          </span>
          <span data-text-preloader="A" className="letters-loading">
            A
          </span>
          <span data-text-preloader="T" className="letters-loading">
            T
          </span>
          <span data-text-preloader="T" className="letters-loading">
            T
          </span>
          <span data-text-preloader="H" className="letters-loading">
            H
          </span>
          <span data-text-preloader="2" className="letters-loading">
            2
          </span>
          <span data-text-preloader="5" className="letters-loading">
            5
          </span>
          <span data-text-preloader="V" className="letters-loading">
            V
          </span>
          <span data-text-preloader="6" className="letters-loading">
            6
          </span>
        </div>
        <p className="text-center">Media Chretien</p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PreLoader;
