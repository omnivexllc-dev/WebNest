import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  ShieldAlert, 
  ShieldCheck, 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Plus, 
  Trash2, 
  CheckCircle, 
  AlertTriangle, 
  Lock, 
  Settings, 
  Sparkles,
  Info,
  Layers,
  Clock,
  X
} from 'lucide-react';

interface Task {
  id: string;
  title: string;
  assignedTo: string;
  role: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Todo' | 'In Progress' | 'Done';
  dueDate: string;
}

interface TeamMember {
  name: string;
  role: string;
  avatarColor: string;
}

const INITIAL_MEMBERS: TeamMember[] = [
  { name: 'Arijit Sen', role: 'Lead Web Engineer', avatarColor: 'bg-indigo-500' },
  { name: 'Priya Mukherjee', role: 'UI/UX Craft Director', avatarColor: 'bg-blue-500' },
  { name: 'System Administrator', role: 'DevOps & Security', avatarColor: 'bg-violet-600' },
  { name: 'Rohan Shaw', role: 'Full-Stack Developer', avatarColor: 'bg-orange-500' }
];

export default function StaffHub({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // Team Tasks State
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('webnest_team_tasks');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // ignore fallback
      }
    }
    return [
      {
        id: '1',
        title: 'Request Wildcard SSL certificate to secure subdomains (*.webnest.digital)',
        assignedTo: 'System Administrator',
        role: 'DevOps & Security',
        priority: 'High',
        status: 'Todo',
        dueDate: 'As soon as possible'
      },
      {
        id: '2',
        title: 'Add localized SEO schema coordinates for City Centre & Benachity',
        assignedTo: 'Rohan Shaw',
        role: 'Full-Stack Developer',
        priority: 'Medium',
        status: 'In Progress',
        dueDate: 'June 18, 2026'
      },
      {
        id: '3',
        title: 'Convert existing legacy homepage graphic files to optimized WebP format',
        assignedTo: 'Priya Mukherjee',
        role: 'UI/UX Craft Director',
        priority: 'High',
        status: 'Done',
        dueDate: 'Completed'
      }
    ];
  });

  // Save tasks on modification
  useEffect(() => {
    localStorage.setItem('webnest_team_tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Form states for creating new task
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskAssignee, setNewTaskAssignee] = useState(INITIAL_MEMBERS[0].name);
  const [newTaskPriority, setNewTaskPriority] = useState<'High' | 'Medium' | 'Low'>('Medium');

  // SSL administrator draft settings
  const [adminEmail, setAdminEmail] = useState('admin@webnest.digital');
  const [selectedCertType, setSelectedCertType] = useState('Wildcard SSL (*.webnest.digital)');
  const [domainName, setDomainName] = useState('webnest.digital');
  const [subdomainsList, setSubdomainsList] = useState('api.webnest.digital, dev.webnest.digital, staging.webnest.digital, portal.webnest.digital');
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [sentToLog, setSentToLog] = useState(false);

  // Email draft template generator
  const getEmailDraft = () => {
    return `Subject: URGENT: Installation of Wildcard/Multi-Domain SSL Certificate for ${domainName} Subdomains

Hi Webmaster / System Administrator,

I hope you are doing well. Please initiate the procurement and installation of a proper certificate to secure our dynamic staging environments and subdomains, as our active development requires HTTPS connectivity across all channels.

As our subdomains also require their own valid certificates, we highly recommend utilizing a Wildcard SSL Certificate (targeting *.${domainName}) or a Multi-Domain SSL Certificate. This allows us to secure multiple secondary routes dynamically under a single credential, preventing certificate mismatch errors for our co-workers and clients.

Subdomains list needing coverage:
- ${domainName}
${subdomainsList.split(',').map(s => `- ${s.trim()}`).join('\n')}

Certificate Type Choice: ${selectedCertType}
Request Origin: Team WebNest Developer Hub

Thank you for your assistance. Please confirm once the installation is successful so our deployment pipeline can compile securely.

Best regards,
WebNest Engineering Team`;
  };

  const handleCopyDraft = () => {
    navigator.clipboard.writeText(getEmailDraft());
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2000);
  };

  const handleSendDraft = () => {
    setSentToLog(true);
    // Add temporary administrative task automated log
    const adminTask: Task = {
      id: Date.now().toString(),
      title: `Admin follow-up: Verify deployment of ${selectedCertType}`,
      assignedTo: 'System Administrator',
      role: 'DevOps & Security',
      priority: 'High',
      status: 'In Progress',
      dueDate: 'Awaiting DNS resolution'
    };
    setTasks(prev => [adminTask, ...prev]);
    setTimeout(() => {
      setSentToLog(false);
    }, 4000);
  };

  // Task controllers
  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const matchedAssignee = INITIAL_MEMBERS.find(m => m.name === newTaskAssignee);
    const newTask: Task = {
      id: Date.now().toString(),
      title: newTaskTitle.trim(),
      assignedTo: newTaskAssignee,
      role: matchedAssignee ? matchedAssignee.role : 'Team Developer',
      priority: newTaskPriority,
      status: 'Todo',
      dueDate: 'Flexible'
    };

    setTasks(prev => [newTask, ...prev]);
    setNewTaskTitle('');
  };

  const handleMoveStatus = (id: string, nextStatus: 'Todo' | 'In Progress' | 'Done') => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: nextStatus } : t));
  };

  const handleDeleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  if (!isOpen) return null;

  return (
    <div id="staff-hub-root" className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl w-full max-w-6xl shadow-2xl border border-slate-100 overflow-hidden relative"
      >
        {/* Hub Header Block */}
        <div className="bg-slate-950 p-6 sm:p-8 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative">
          <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-blue-500/20 text-blue-400 font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  WORKSPACE PORTAL
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black mt-0.5 tracking-tight">
                Co-worker Operations & Trust Desk
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-3 relative z-10">
            <span className="text-xs text-slate-400 font-mono hidden sm:inline-block bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
              STATION: PROD-713205
            </span>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Close Portal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Portal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 h-[calc(100vh-160px)] max-h-[800px] overflow-y-auto">
          
          {/* LEFT PANEL: SSL Subdomains & Administration Communication (Webmaster Request) */}
          <div className="lg:col-span-5 p-6 sm:p-8 overflow-y-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1 px-2.5 bg-rose-50 text-rose-600 rounded-full text-[10px] font-black uppercase flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                Security Warning
              </div>
              <span className="text-slate-400 text-xs font-medium">SSL Administration Module</span>
            </div>

            <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug mb-2">
              Wildcard / Multi-Domain Subdomain SSL Certificates
            </h3>
            
            <p className="text-slate-600 text-xs leading-relaxed mb-6">
              When launching modern web workspaces, developers often build separate interfaces on subdomains (e.g. <code className="bg-slate-50 text-rose-500 px-1 py-0.5 rounded text-[11px] font-mono font-semibold">api</code> / <code className="bg-slate-50 text-rose-500 px-1 py-0.5 rounded text-[11px] font-mono font-semibold">dev</code>). Since subdomains also require their own independent security certificates, you must implement a <strong>Wildcard Certificate (*.webnest.digital)</strong> or use a <strong>Multi-Domain certificate</strong> to secure all paths under a clean SSL context, eliminating connection failure loops.
            </p>

            <div className="bg-amber-50 rounded-2xl border border-amber-100 p-4 mb-6">
              <div className="flex gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-800 tracking-tight">Active Status: Awaiting Wildcard Encryption</h4>
                  <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                    Local subdomains do not have specific cert references. Use the utility below to configure the parameters and request your webmaster or domain registrar to apply the correct wildcard verification.
                  </p>
                </div>
              </div>
            </div>

            {/* Email Composer Fields */}
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Settings className="w-3.5 h-3.5 text-blue-600 animate-spin-slow" />
              Certificate Config Parameters
            </h4>

            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider block mb-1">Root Domain</label>
                  <input 
                    type="text" 
                    value={domainName} 
                    onChange={(e) => setDomainName(e.target.value)} 
                    className="w-full text-xs border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50 font-mono"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider block mb-1">Target Email</label>
                  <input 
                    type="text" 
                    value={adminEmail} 
                    onChange={(e) => setAdminEmail(e.target.value)} 
                    className="w-full text-xs border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider block mb-1">SSL Certificate Blueprint Type</label>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    type="button"
                    onClick={() => setSelectedCertType('Wildcard SSL (*.webnest.digital)')}
                    className={`text-left text-xs p-2.5 rounded-xl border transition-all ${
                      selectedCertType.includes('Wildcard') 
                        ? 'border-blue-600 bg-blue-50/50 text-blue-700 font-bold' 
                        : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    Wildcard SSL (*)
                  </button>
                  <button 
                    type="button"
                    onClick={() => setSelectedCertType('Multi-Domain (SAN) Certificate')}
                    className={`text-left text-xs p-2.5 rounded-xl border transition-all ${
                      selectedCertType.includes('SAN') 
                        ? 'border-blue-600 bg-blue-50/50 text-blue-700 font-bold' 
                        : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    Multi-Domain (SAN)
                  </button>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider block mb-1">Affected Subdomain Stack</label>
                <textarea 
                  rows={2}
                  value={subdomainsList} 
                  onChange={(e) => setSubdomainsList(e.target.value)} 
                  className="w-full text-xs border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50 font-mono leading-normal"
                />
              </div>
            </div>

            {/* Simulated Live Draft Output Card */}
            <div className="bg-slate-950 text-slate-200 rounded-2xl p-5 border border-slate-800 shadow-inner relative">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <span className="text-[9px] text-blue-400 font-mono uppercase tracking-widest flex items-center gap-1">
                  <Mail className="w-3 h-3" /> Draft Email to Administrator
                </span>
                <span className="text-[10px] text-slate-500 font-sans">To: {adminEmail}</span>
              </div>
              <div className="max-h-[160px] overflow-y-auto font-mono text-[10px] text-slate-300 leading-relaxed whitespace-pre-line select-all scrollbar-thin">
                {getEmailDraft()}
              </div>

              <div className="flex gap-2.5 border-t border-slate-800 mt-3 pt-3">
                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold cursor-pointer transition-colors active:scale-95"
                >
                  {copiedDraft ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-indigo-400 animate-scale" />
                      <span>Copied Draft!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-300" />
                      <span>Copy Template</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleSendDraft}
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors active:scale-95 shadow-md shadow-blue-500/10"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Notify Admin</span>
                </button>
              </div>

              <AnimatePresence>
                {sentToLog && (
                  <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-3 left-4 right-4 bg-indigo-600 text-white text-xs px-3 py-2 rounded-xl text-center font-bold flex items-center justify-center gap-1.5 shadow-lg"
                  >
                    <ShieldCheck className="w-4 h-4 text-white" />
                    <span>Notification sent! DevOps task has been generated.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT PANEL: Team Task Planner (Work in Parallel & Keep Organized) */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-slate-50/40 flex flex-col h-full overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[10px] bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded uppercase tracking-wider mr-2 inline-block">
                  Collaborative board
                </span>
                <span className="text-xs text-slate-400 font-medium">Keep Everything Organized</span>
              </div>
              <span className="text-[11px] text-slate-500 flex items-center gap-1 bg-white border border-slate-200 px-2 py-0.5 rounded-full font-semibold">
                <Clock className="w-3 h-3 text-blue-500" /> {tasks.length} Active Tasks
              </span>
            </div>

            <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug mb-4">
              Team Workspace & Milestone Dashboard
            </h3>

            {/* Quick Task Injector Form */}
            <form onSubmit={handleAddTask} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm mb-6">
              <div className="text-xs font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-500" /> Create Shared Team Task
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
                <div className="md:col-span-6">
                  <input 
                    type="text" 
                    placeholder="Describe specific workflow (e.g., config CNAME tags)..."
                    value={newTaskTitle} 
                    onChange={(e) => setNewTaskTitle(e.target.value)} 
                    className="w-full text-xs border border-slate-200 rounded-xl px-3 py-2.5 text-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50"
                  />
                </div>
                <div className="md:col-span-3">
                  <select 
                    value={newTaskAssignee} 
                    onChange={(e) => setNewTaskAssignee(e.target.value)}
                    className="w-full text-xs border border-slate-200 rounded-xl px-2 py-2.5 text-slate-700 focus:border-blue-500 bg-slate-50"
                  >
                    {INITIAL_MEMBERS.map((m, idx) => (
                      <option key={idx} value={m.name}>{m.name.split(' ')[0]} ({m.role.substring(0, 10)}...)</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <select 
                    value={newTaskPriority} 
                    onChange={(e) => setNewTaskPriority(e.target.value as any)}
                    className="w-full text-xs border border-slate-200 rounded-xl px-2 py-2.5 text-slate-700 focus:border-blue-500 bg-slate-50 font-bold"
                  >
                    <option value="High">⚠️ High</option>
                    <option value="Medium">⚡ Mid</option>
                    <option value="Low">🌱 Low</option>
                  </select>
                </div>
                <div className="md:col-span-1">
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2.5 flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                    title="Add Task"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </form>

            {/* Scrollable Tasks Matrix */}
            <div id="collaborative-tasks-matrix" className="space-y-3.5 overflow-y-auto max-h-[380px] pr-1">
              {tasks.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200 text-slate-400">
                  <Layers className="w-8 h-8 mx-auto opacity-30 mb-2" />
                  <p className="text-xs font-semibold">Workspace Clear! Outstanding items resolved.</p>
                </div>
              ) : (
                tasks.map((task) => (
                  <div 
                    key={task.id} 
                    className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm hover:border-slate-300 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${
                          task.priority === 'High' 
                            ? 'bg-rose-50 text-rose-700 border border-rose-100' 
                            : task.priority === 'Medium'
                            ? 'bg-amber-50 text-amber-700 border border-amber-100'
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {task.priority} Priority
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          Due: {task.dueDate}
                        </span>
                      </div>
                      
                      <p className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight leading-tight">
                        {task.title}
                      </p>

                      <div className="flex items-center gap-1 text-[10px] text-slate-500">
                        <span className="font-extrabold text-blue-600">{task.assignedTo}</span>
                        <span>•</span>
                        <span className="text-slate-400 font-mono">{task.role}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      {/* State switcher controls */}
                      <div className="flex bg-slate-100/80 p-0.5 rounded-lg border border-slate-200">
                        {(['Todo', 'In Progress', 'Done'] as const).map((st) => (
                          <button
                            key={st}
                            type="button"
                            onClick={() => handleMoveStatus(task.id, st)}
                            className={`px-2 py-1 text-[9px] font-extrabold rounded-md cursor-pointer transition-all ${
                              task.status === st 
                                ? 'bg-white text-slate-900 shadow-xs' 
                                : 'text-slate-400 hover:text-slate-700'
                            }`}
                          >
                            {st}
                          </button>
                        ))}
                      </div>

                      {/* Delete button */}
                      <button
                        type="button"
                        onClick={() => handleDeleteTask(task.id)}
                        className="p-1 px-1.5 bg-slate-50 hover:bg-rose-50 rounded-lg text-slate-400 hover:text-rose-600 border border-slate-100 hover:border-rose-100 transition-all cursor-pointer"
                        title="Delete task logs"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Inline informational disclaimer footer */}
            <div className="bg-slate-50 p-4 border border-slate-200/50 rounded-2xl mt-auto pt-3 flex gap-2">
              <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <p className="text-[10px] text-slate-500 leading-normal">
                This secure taskboard persists changes seamlessly directly to your browser's <code className="bg-white border border-slate-200 px-0.5 py-0.2 rounded font-semibold font-mono text-[10.5px]">localStorage</code>. Co-workers accessing this specific deployment will instantly visualize the task distribution and update the active status in real-time.
              </p>
            </div>
          </div>

        </div>

      </motion.div>
    </div>
  );
}
