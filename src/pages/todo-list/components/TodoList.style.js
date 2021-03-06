import styled from 'styled-components';
export default styled.div`
  border: 1px solid #ccc;
  padding: 10px;

  .TodoListItem {
    cursor: pointer;
    padding: 10px;
    border-bottom: 1px dashed #ccc;
    display: flex;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background-color: aquamarine;
    }

    .col-ck-box {
      width: 30px;
    }

    .col-content {
      width: 100%;
    }

    .col-cmd-box {
      width: 20px;
      .btn {
        cursor: pointer;
      }

      .btn-edit {
        display: none;
      }
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;

    div {
      span {
        margin-left: 10px;
      }
    }
  }
`;
