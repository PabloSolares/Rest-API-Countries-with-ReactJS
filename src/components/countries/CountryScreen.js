import React from "react";
import { Selectors } from "../ui/Selectors";
import { CountryCard } from "./CountryCard";
import { useFetchCountries } from "./../../hooks/useFetchCountries";
import { allCountries } from "../../helpers/getCountries";
import { LoadingScreen } from "../ui/LoadingScreen";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

export const CountryScreen = () => {
  const { data, loading } = useFetchCountries(allCountries);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState(null);

  useEffect(() => {
    const total = data.length;
    const endOffset = itemOffset + 15;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(total / 15));
  }, [loading, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 15) % data.length;
    console.log()
    setItemOffset(newOffset);
  };
  return (
    <div>
      {loading && <LoadingScreen />}
      {!loading && <Selectors />}

      {data && (
        <div id="card-container">
          {currentItems?.map((country) => {
            return (
              <CountryCard
                key={country?.name}
                name={country?.name}
                population={country?.population}
                flag={country?.flag}
                region={country?.region}
                capital={country?.capital}
              />
            );
          })}
        </div>
      )}

      {!loading && (
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />

      )}
    </div>
  );
};
