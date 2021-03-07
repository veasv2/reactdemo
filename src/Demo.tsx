import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';

function Demo() {
  return (
    <EuiFlexItem grow={false}>
      <EuiButton onClick={() => { }}>Button</EuiButton>
    </EuiFlexItem>
  );
}

export default Demo;
