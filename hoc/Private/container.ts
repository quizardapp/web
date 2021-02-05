import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import Private from ".";

function mapStateToProps(state: CombinedState<{}>) {
  return {};
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
  return {};
}

const CabinetsContainer = connect(mapStateToProps, mapDispatchToProps)(Private);

export default CabinetsContainer;
