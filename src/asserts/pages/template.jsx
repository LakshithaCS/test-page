import React from 'react';
import './styles.css';

export default function Template(props) {
  return (
    <div class="container-fluid h-100">
    <div class="row min-vh-100 flex-column flex-md-row">

        <aside class="col-12 col-md-4 p-0 bg-primary flex-shrink-1">
            <div class="text-center logo">
              	{props.left}
            </div>
        </aside>

        <main class="col">
          <div className="form">
                {props.right}
          </div>          
        </main>
    </div>
</div>
  );
}