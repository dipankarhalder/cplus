import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

export const App = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Button>Button</Button>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </>
  );
};
