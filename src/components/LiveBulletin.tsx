import React, { useState } from 'react';
import { Bell, AlertCircle, Calendar, Trophy, HeartHandshake, Pin } from 'lucide-react';
import { useTournament } from '../context/TournamentContext';
import { Announcement } from '../types';

export const LiveBulletin: React.FC = () => {
  const { announcements } = useTournament();
  const [filterTag, setFilterTag] = useState<string>('all');

  const filteredAnnouncements = announcements.filter(a => {
    if (filterTag === 'all') return true;
    return a.tag === filterTag;
  });

  const getTagBadge = (tag: Announcement['tag']) => {
    switch (tag) {
      case 'urgent':
        return (
          <span className="flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
            <AlertCircle className="w-3 h-3" />
            <span>Urgent Notice</span>
          </span>
        );
      case 'schedule':
        return (
          <span className="flex items-center gap-1 text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
            <Calendar className="w-3 h-3" />
            <span>Match Schedule</span>
          </span>
        );
      case 'fundraiser':
        return (
          <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            <HeartHandshake className="w-3 h-3" />
            <span>Milestone</span>
          </span>
        );
      case 'clinic':
        return (
          <span className="flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
            <Trophy className="w-3 h-3" />
            <span>Youth Clinic</span>
          </span>
        );
      case 'tournament':
        return (
          <span className="flex items-center gap-1 text-[11px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
            <Trophy className="w-3 h-3" />
            <span>Tournament</span>
          </span>
        );
      default:
        return (
          <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
            General
          </span>
        );
    }
  };

  return (
    <section className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-widest">
              <Bell className="w-3.5 h-3.5" />
              <span>Live Event Updates</span>
              <span aria-hidden="true">·</span>
              <span>Announcements Bulletin</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight mt-1">
              Court Announcements &amp; News
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg text-xs font-semibold">
            {['all', 'urgent', 'schedule', 'fundraiser', 'clinic'].map(tag => (
              <button
                key={tag}
                onClick={() => setFilterTag(tag)}
                className={`px-3 py-1.5 rounded-md capitalize transition-colors ${
                  filterTag === tag
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tag === 'all' ? 'All Updates' : tag}
              </button>
            ))}
          </div>
        </div>

        {/* Announcement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredAnnouncements.map(item => (
            <div
              key={item.id}
              className={`p-5 rounded-xl border transition-all ${
                item.isPinned
                  ? 'bg-amber-50/40 border-amber-200 shadow-xs'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  {item.isPinned && (
                    <span className="flex items-center gap-0.5 text-[11px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded">
                      <Pin className="w-2.5 h-2.5 fill-amber-800" />
                      <span>PINNED</span>
                    </span>
                  )}
                  {getTagBadge(item.tag)}
                </div>
                <span className="text-[11px] text-slate-500 font-mono">{item.timestamp}</span>
              </div>

              <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
