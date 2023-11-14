import React from "react";
import "./CourseList.css";
function CourseListRow ({isHeader = false, textFirst, textSecondCell = null,}) {
    return (
        <>
        <tr>
          {isHeader ? (
            textSecondCell == null ? (
              <th colSpan={2}>{textFirstCell}</th>
            ) : (
              <>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th>
              </>
            )
          ) : (
            <>
              <td>{textFirstCell}</td>
              <td>{textSecondCell}</td>
            </>
          )}
        </tr>
      </>
    );
};
export default CourseListRow;