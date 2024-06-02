import React from "react";


export default function TopHeader () {
    return (
        <>
        <div id="kt_header" className="header header-fixed">
              <div className="container-fluid d-flex align-items-stretch justify-content-between">
                <div
                  className="header-menu-wrapper header-menu-wrapper-left"
                  id="kt_header_menu_wrapper"
                >
                  <div
                    id="kt_header_menu"
                    className="header-menu header-menu-mobile header-menu-layout-default"
                  >
                    ul
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}