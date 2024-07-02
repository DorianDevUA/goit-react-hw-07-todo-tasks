import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import { Wrapper } from './StatusFilter.styled';
import { statusFilters } from '../../redux/filters/constants';
import { getStatusFilter } from '../../redux/filters/selectors';
import { setStatusFilter } from '../../redux/filters/actions';

const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const handleFilterChange = filter => {
    dispatch(setStatusFilter(filter));
  };

  return (
    <Wrapper>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </Wrapper>
  );
};

export default StatusFilter;
