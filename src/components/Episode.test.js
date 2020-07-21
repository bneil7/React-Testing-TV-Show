import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from './Episodes';

const episodeData = [
    {
        id: 553946,
        url: 'http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers',
        name: 'Chapter One: The Vanishing of Will Byers',
        season: 1,
        number: 1,
        airdate: '2016-07-15',
        airtime: '',
        airstamp: '2016-07-15T12:00:00+00:00',
        runtime: 60,
        image: {
          medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg',
          original: 'http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg'
        },
        summary: '<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy\'s friends conduct their own search, and meet a mysterious girl in the forest.</p>',
        _links: {
          self: {
            href: 'http://api.tvmaze.com/episodes/553946'
          }
        }
      }
]

test('Episodes.js renders with no errors', () => {
    render(<Episodes episodes={[]} />)
});

test('renders episodes when its prop gets updated', () => {
    const { rerender } = render(<Episodes episodes={[]} />);
    
    expect(screen.queryAllByTestId(/episode/i)).toHaveLength(0);

    rerender(<Episodes episodes={episodeData} />)

    expect(screen.getAllByTestId(/episode/i)).toHaveLength(1);

    expect(screen.getByText(/chapter one/i)).toBeInTheDocument();
})