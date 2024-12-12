import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import { ColorPicker } from './components/ColorPicker';
import { Button } from './components/ui/Button';
import { Dialog, DialogContent, DialogTrigger } from './components/ui/Dialog';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  return (
    <div 
      className="min-h-screen w-full transition-colors duration-300"
      style={{ backgroundColor }}
    >
      <div className="fixed top-4 right-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="glass" size="icon" className="border">
              <Settings className="h-5 w-5 text-gray-600" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <ColorPicker onColorChange={setBackgroundColor} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default App;
