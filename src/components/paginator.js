import { Link } from 'gatsby';
import React from 'react';

const Paginator = ({ pageContext }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'center',
          listStyle: 'none',
          paddingTop: '1rem',
          marginRight: '2rem',
        }}
      >
        {!isFirst && (
          <Link to={`/blog/${prevPage}`} rel="prev">
            ← Previous
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <li
            key={`pagination-number${i + 1}`}
            style={{
              margin: 0,
            }}
          >
            <Link
              to={`/blog/${i === 0 ? '' : i + 1}`}
              style={{
                padding: '1rem',
                marginTop: '2rem',
                textDecoration: 'none',
                color: i + 1 === currentPage ? '#000000' : '',
                background: i + 1 === currentPage ? '#f4f4f4' : '',
              }}
            >
              {i + 1}
            </Link>
          </li>
        ))}
        {!isLast && (
          <Link to={`/blog/${nextPage}`} rel="next">
            Next →
          </Link>
        )}
      </ul>
    </>
  );
};

export default Paginator;
