import { useDispatch, useSelector } from 'react-redux';
import { statusFilters } from 'constants';
import { getStatusFilter, setStatusFilter } from 'redux/filtersSlice';
import Button from 'components/Button';
import { Wrapper } from './StatusFilter.styled';

const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const handleFilterChange = status => {
    dispatch(setStatusFilter({ status }));
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
