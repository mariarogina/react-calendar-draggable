import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { popupClose } from '../../store/actions/popup';
import { eventAdd, eventRemove } from '../../store/actions/event';

const PopupWrapper = styled.div`
  z-index: 100;
  position: absolute;
  background: none;
`;

const PopupForm = styled.form`
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 450px;
  background: white;
  padding: 22px 26px 17px;
  width: 255px;
  height: 280px;
  border: 1px solid black;
`;

const PopupIcon = styled.i`
  color: grey;
  position: relative;
  left: 90%;
  top: -70%;
`;

const PopupFormControlers = styled.div`
  display: flex;
  justify-content: space-around;
`;

const PopupFormSelect = styled.select`
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 2px solid grey;
  outline: none;
  background-color: blue;
  font-size: 16px;
  padding: 3px;
`;

const PopupFormInput = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  width: 100%;
  font-size: 14px;
`;

const PopupFormButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  &:hover {
    transition: 1s;
    color: grey;
    cursor: pointer;
  }
  width: 150px;
  height: 40px;
`;

const DeleteBtn = styled(PopupFormButton)`
  color: #ff5f5f;
`;

const CloseBtn = styled.button`
  font-family: 'Material Icons';
  color: grey;
  position: absolute;
  background: none;
  border: none;
  border-radius: 20px;
  height: 30px;
  width: 30px;
  font-size: 18px;
  top: 0%;
  left: 84%;
  &:hover {
    transition: 1s;
    color: black;
    cursor: pointer;
  }
`;

const EventPopup = ({ popup, popupClose, events, eventAdd, eventRemove }) => {
  const title = React.createRef();
  const start = React.createRef();
  const end = React.createRef();
  const color = React.createRef();

  const colorChangeHandler = e => {
    color.current.style.background = 'green';
  };

  const handleChange = value => {
    return value;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const event = {
      title: title.current.value,
      start: start.current.value,
      end: end.current.value,
      id: events[events.length - 1].id + 1,
    };
    if (popup.id) {
      eventRemove(popup.id);
    }
    eventAdd(event);
    popupClose();
    return false;
  };
  const removeItem = id => {
    eventRemove(id);
    popupClose();
  };

  return (
    <PopupWrapper style={{ top: popup.y ? popup.y + 40 : 0, left: popup.x ? popup.x - 150 : 0 }}>
      <PopupForm onSubmit={e => handleSubmit(e)}>
        <div>
          <PopupFormInput
            placeholder="Available"
            autoComplete="off"
            ref={title}
            defaultValue={popup.title}
            maxLength="30"
            name="title"
          />
        </div>
        <div>
          <PopupFormInput
            placeholder="DD/MM/YYYY"
            autoComplete="off"
            ref={start}
            required
            onChange={e => e}
            patern="/[+-]?\d{4}(-[01]\d(-[0-3]\d(T[0-2]\d:[0-5]\d:?
            ([0-5]\d(\.\d+)?)?[+-][0-2]\d:[0-5]\dZ?)?)?)?/"
            defaultValue={popup.start}
            name="start"
          />
          <PopupIcon className="material-icons">date_range</PopupIcon>
        </div>
        <div>
          <PopupFormInput
            placeholder="event time"
            autoComplete="off"
            ref={end}
            onFocus={value => handleChange(value)}
            defaultValue={popup.end}
            name="end"
          />
          <PopupIcon className="material-icons">access_time</PopupIcon>
        </div>
        <PopupFormControlers>
          <div>
            <DeleteBtn onClick={() => removeItem(popup.id)}>Сancel event</DeleteBtn>
          </div>
          <div>
            <PopupFormButton type="submit">Save</PopupFormButton>
          </div>
        </PopupFormControlers>
        <CloseBtn className="material-icons" onClick={() => popupClose()}>
          clear
        </CloseBtn>
      </PopupForm>
    </PopupWrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  eventAdd: event => dispatch(eventAdd(event)),
  eventRemove: event => dispatch(eventRemove(event)),
  popupClose: () => dispatch(popupClose(false)),
});

const mapStateToProps = state => ({
  events: state.events,
  popup: state.popup,
});

export default connect(mapStateToProps, mapDispatchToProps)(EventPopup);
