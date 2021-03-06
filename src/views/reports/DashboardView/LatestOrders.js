import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const data = [
  {
    id: uuid(),
    title: 'do it do it do it do it do it do it do it do it do it do it',
    text: 'fgdsfg sdfg sdfg sdfg sdfg',
    tags: ['errands', 'buying'],
    urgency: 5,
    urgency: 5,
    isActionable: true,
    startDate: 1555016400000,
    dueDate: 1555016400000,
    status: 'Backlog',
    isRepeat: true,
    repeatCycle: 'week', 
  },
  {
    id: uuid(),
    title: 'do it',
    text: 'fgdsfg sdfg sdfg sdfg sdfg',
    tags: ['errands', 'buying'],
    urgency: 5,
    urgency: 5,
    isActionable: true,
    startDate: 1555016400000,
    dueDate: 1555016400000,
    status: 'Backlog',
    isRepeat: true,
    repeatCycle: 'week', 
  },
 
  {
    id: uuid(),
    title: 'do it',
    text: 'fgdsfg sdfg sdfg sdfg sdfg',
    tags: ['errands', 'buying'],
    urgency: 5,
    urgency: 5,
    isActionable: true,
    startDate: 1555016400000,
    dueDate: 1555016400000,
    status: 'Backlog',
    isRepeat: true,
    repeatCycle: 'week', 
  },
 
  {
    id: uuid(),
    title: 'do it',
    text: 'fgdsfg sdfg sdfg sdfg sdfg',
    tags: ['errands', 'buying'],
    urgency: 5,
    urgency: 5,
    isActionable: true,
    startDate: 1555016400000,
    dueDate: 1555016400000,
    status: 'Backlog',
    isRepeat: true,
    repeatCycle: 'week', 
  },
 
  {
    id: uuid(),
    title: 'do it',
    text: 'fgdsfg sdfg sdfg sdfg sdfg',
    tags: ['errands', 'buying'],
    urgency: 5,
    urgency: 5,
    isActionable: true,
    startDate: 1555016400000,
    dueDate: 1555016400000,
    status: 'Backlog',
    isRepeat: true,
    repeatCycle: 'week', 
  },
 
  {
    id: uuid(),
    title: 'do it',
    text: 'fgdsfg sdfg sdfg sdfg sdfg',
    tags: ['errands', 'buying'],
    urgency: 5,
    urgency: 5,
    isActionable: true,
    startDate: 1555016400000,
    dueDate: 1555016400000,
    status: 'Backlog',
    isRepeat: true,
    repeatCycle: 'week', 
  },
 
  {
    id: uuid(),
    title: 'do it',
    text: 'fgdsfg sdfg sdfg sdfg sdfg',
    tags: ['errands', 'buying'],
    urgency: 5,
    urgency: 5,
    isActionable: true,
    startDate: 1555016400000,
    dueDate: 1555016400000,
    status: 'Backlog',
    isRepeat: true,
    repeatCycle: 'week', 
  },
 
  {
    id: uuid(),
    title: 'do it',
    text: 'fgdsfg sdfg sdfg sdfg sdfg',
    tags: ['errands', 'buying'],
    urgency: 5,
    urgency: 5,
    isActionable: true,
    startDate: 1555016400000,
    dueDate: 1555016400000,
    status: 'Backlog',
    isRepeat: true,
    repeatCycle: 'week', 
  },
 
  {
    id: uuid(),
    title: 'do it',
    text: 'fgdsfg sdfg sdfg sdfg sdfg',
    tags: ['errands', 'buying'],
    urgency: 5,
    urgency: 5,
    isActionable: true,
    startDate: 1555016400000,
    dueDate: 1555016400000,
    status: 'Backlog',
    isRepeat: true,
    repeatCycle: 'week', 
  },
 
  {
    id: uuid(),
    title: 'do it',
    text: 'fgdsfg sdfg sdfg sdfg sdfg',
    tags: ['errands', 'buying'],
    urgency: 5,
    urgency: 5,
    isActionable: true,
    startDate: 1555016400000,
    dueDate: 1555016400000,
    status: 'Backlog',
    isRepeat: true,
    repeatCycle: 'week', 
  },
 
  {
    id: uuid(),
    title: 'do it',
    text: 'fgdsfg sdfg sdfg sdfg sdfg',
    tags: ['errands', 'buying'],
    urgency: 5,
    urgency: 5,
    isActionable: true,
    startDate: 1555016400000,
    dueDate: 1555016400000,
    status: 'Backlog',
    isRepeat: true,
    repeatCycle: 'week', 
  },
 
  {
    id: uuid(),
    title: 'do it',
    text: 'fgdsfg sdfg sdfg sdfg sdfg',
    tags: ['errands', 'buying'],
    urgency: 5,
    urgency: 5,
    isActionable: true,
    startDate: 1555016400000,
    dueDate: 1555016400000,
    status: 'Backlog',
    isRepeat: true,
    repeatCycle: 'week', 
  }
];

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestOrders = ({ className, ...rest }) => {
  const classes = useStyles();
  const [orders] = useState(data);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Latest Orders" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Title
                </TableCell>
                <TableCell>
                Status
                </TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                      Due Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  Tags
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  hover
                  key={order.id}
                >
                  <TableCell>
                    {order.title}
                  </TableCell>
                  <TableCell>
                    {order.status}
                  </TableCell>
                  <TableCell>
                    {moment(order.startDate).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                  {order.tags.map(tag=> {return (
                    <Chip
                      color="primary"
                      label={tag}
                      size="small"
                    />
                  )})}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
