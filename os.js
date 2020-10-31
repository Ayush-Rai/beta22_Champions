questions = [{str: 'Which system program combines the separately compiled modules of a program into a form suitable for execution?',    choices: ['Assembler', 'Linking Loader' ,'Cross Compiler' ,'Load and Go'],    correct: 1,	 level: 2},
     		{str: 'Select the scheduling technique which allows processes that are logically runnable to be temporarily suspended',    choices: ['Non Preemptive', 'Preemptive', 'FCFS', 'Shortest First'],    correct: 0,    level: 2},
            {str: 'Which of the following is not an Operating System?',    choices: ['Linux', 'Apple', 'Android', 'Windows'],    correct: 0,    level: 1},
            {str: 'Which among these is a valid type of Operating System?',    choices: ['Resource OS', 'User OS', 'Network OS', 'Memory OS'],    correct: 2,    level: 1},
            {str: 'Where is the Bootstrap Program initially stored to start the computer?',    choices: ['RAM', 'Register', 'Hard Disk', 'EEPROM'],    correct: 3,    level: 3},
            {str: 'Which is a Software generated interrupt caused by an error or by a specific request from user program to start OS Service?',    choices: ['Trap', 'Doorbell', 'IRQ', 'NMI'],    correct: 0,    level: 3},
            {str: 'Select among the following which is NOT an example of Peer-to-Peer Computing',    choices: ['BitTorrent', 'Gnutella', 'Skype', 'Harmony'],    correct: 3,    level: 2},
            {str: 'Which Operating Sysem follows a Modular + Monolithic OS Architecture?',    choices: ['Solaris', 'WINDOWX', 'Mac OSX', 'Android'],    correct: 0,    level: 3},
            {str: 'Select the name of the Opensource Bootstrap programs for LINUX systems',    choices: ['init', 'Aqua', 'Grub', 'BIOS'],    correct: 2,    level: 2},
            {str: 'Which scheduler controls the Degree of Multiprogramming in system?',    choices: ['Medium-Term', 'Fast-term', 'Long-term', 'Short-term'],    correct: 2,    level: 3},
            {str: 'Which instruction is used to create a new process in UNIX?',    choices: ['create()', 'init()' ,'exec()' ,'fork()'],    correct: 3,    level: 1},
            {str: 'What is the first process which starts during the booting of the computer system?',    choices: ['BIOS', 'proc', 'init', 'cmd'],    correct: 2,    level: 1},
            {str: 'Which module gives control of the CPU to the process selected by the short-term scheduler?',    choices: ['Dispatcher', 'Loader', 'Linker', 'Timer'],    correct: 0,    level: 2},
            {str: 'What is the term given to the time taken to switch between processes in the context of Scheduling?',    choices: ['Context Switch', 'Burst Time', 'Wait Time', 'Inter Switch'],    correct: 0,    level: 2},
            {str: 'Which technique is used to gradually increase the priority of the process which wait for a long time in system?',    choices: ['Starvation', 'Aging', 'Convoy', 'Senile'],    correct: 1,    level: 1},
            {str: 'Producer Consumer problem can be solved using - ',    choices: ['Semaphores', 'Event Counters', 'Monitors', 'All of the above'],    correct: 3,    level: 1},
            {str: 'The details of all external symbols and relocation formation is provided to linker by - ',    choices: ['Macro Processor', 'Translator', 'Loader', 'Editor'],    correct: 1,    level: 3},
            {str: 'Which problem is solved by Dijkstras Bankers Algorithm?',    choices: ['Mutual Exclusion', 'Deadlock Avoidance', 'Deadlock Recovery', 'Cache Coherence'],    correct: 1,    level: 2},
            {str: 'What occurs when several processes access and manipulate the same data concurrently and the outcome depends on the order in which access takes place?',    choices: ['Convoy Effect', 'Race Condition', 'Cache coherence', 'Mutual Exclusion'],    correct: 1,    level: 1},
            {str: 'If the number of bits in a virtual address of a program is 16 and the page size is 0.5K bytes, the number of pages in the virtual addres space is?',    choices: ['16', '32', '64', '128'],    correct: 3,    level: 3},
            {str: 'With MS-DOS which command will divide the surface of the blank floppy disk into sectors and assign a unique address to each one?',    choices: ['FAT command', 'VER command', 'FORMAT command', 'CHKDSK command'],    correct: 2,    level: 3},
            {str: 'A translator which reads an entire programme written in a high level language and converts it into machine language code is:',    choices: ['Assembler', 'Translator', 'Compiler', 'System Software'],    correct: 2,    level: 1},
            {str: 'The action of parsing the source program into the proper syntactic classes is known as:',    choices: ['Syntax Analysis', 'Lexical Analysis', 'Interpretation Analysis', 'Compile Analysis'],    correct: 1,    level: 1},
            {str: 'For how many processes which are sharing common data, the Dekkers algorithm implements mutual exclusion?',    choices: ['1', '2', '3', '4'],    correct: 1,    level: 2},
            {str: 'Which of the following program is not a utility program?',    choices: ['Debugger', 'Editor', 'Spooler', 'All of the above'],    correct: 2,    level: 2},
            {str: 'In which load balancing technique in SMP the Idle processor takes a waiting task to execute from a busy processor',    choices: ['Get Migration', 'Post Migration', 'Push Migration', 'Pull Migration'],    correct: 3,    level: 3},
            {str: 'Consider a machine with 64 MB physical memory and a 32-bit virtual address space. If the page size is 4KB, what is the approximate size of the page table?',    choices: ['2 MB', '8 MB', '16 MB', '24 MB'],    correct: 0,    level: 3},
            {str: 'A process executes the code fork(); fork(); fork(); What will be the total number of child processes?',    choices: ['3', '4', '7', '8'],    correct: 2,    level: 2},
            {str: 'Let the page fault service time be 10ms in a computer with average memory access time being 20ns. If one page fault is generated for every 10^6 memory accesses, what is the effective access time for the memory?',    choices: ['21 ns', '30 ns', '23 ns', '35 ns'],    correct: 1,    level: 3},
            {str: 'Which of the following page replacement algorithms suffers from Belady’s Anomaly?',    choices: ['Optimal replacement', 'LRU', 'FIFO', 'Both 1 and 3'],    correct: 2,    level: 1},
            {str: 'What are the two methods of the LRU page replacement policy that can be implemented in hardware?',    choices: ['Counters', 'RAM & Registers', 'Registers', 'Stack & Counters'],    correct: 3,    level: 2},
            {str: 'In UNIX, the set of masked signals can be set or cleared using which function?',    choices: ['sigprocmask', 'sigmaskproc', 'sigmask', 'sigproc'],    correct: 0,    level: 3},
            {str: 'If Albus Dumbledore wants to transform executable binary file into a process which spell wouldhe use?',    choices: ['ioctl', 'longjmp', 'fork', 'exec'],    correct: 3,    level: 3},
            {str: 'Harry Potter has just joined Hogwarts, which spell should he use which will never return an error?',    choices: ['getpid', 'fork', 'ioctl', 'open'],    correct: 0,    level: 2},
            {str: 'Sherlock is solving the Scandal in Bohemia, which is the Deadlock avoidance algorithm he has to use to get the passkey from Irene Adler?',    choices: ['Round-Robin', 'Bankers', 'Elevators', 'Karns'],    correct: 1,    level: 1},
            {str: 'Oswald wants the address of the next instruction to be executed by the current process, what correct answer does Weenie give him?',    choices: ['CPU registers', 'Process stack', 'Pipe', 'Program counter'],    correct: 3,    level: 1},
            {str: 'Bounded capacity and Unbounded capacity queues are referred to as - ',    choices: ['Programmed buffering', 'Automatic buffering', 'User defined buffering', 'No buffering'],    correct: 1,    level: 3},
            {str: 'What is used to differentiate the many network services a system supports?',    choices: ['Variables', 'Sockets', 'Ports', 'Services'],    correct: 2,    level: 2},
            {str: 'The processes that are residing in main memory and are ready and waiting to execute are kept on a list called - ',    choices: ['Job Queue', 'Ready Queue', 'Execution Queue', 'Process Queue'],    correct: 1 ,    level: 1},
            {str: 'If there are 32 segments, each of size 1Kb, then the logical address should have how many bits?',    choices: ['12', '13', '14', '15'],    correct: 3,    level: 3},
            {str: 'The interval from the time of submission of a process to the time of completion is termed as-',    choices: ['Turnaround Time', 'Waiting Time', 'Response Time', 'Throughput'],    correct: 0,    level: 1},
            {str: 'When device A has a cable that plugs into device B, and device B has a cable that plugs into device C and device C plugs into a port on the computer, this arrangement is called what?',    choices: ['Bus', 'Daisy Chain', 'Daffodil Chain', 'Port'],    correct: 1,    level: 2},
            {str: 'What determines the cause of the interrupt, performs the necessary processing and executes a return from the interrupt instruction to return the CPU to the execution state prior to the interrupt?',    choices: ['Interrupt Request', 'Device driver', 'Interrupt handler', 'All of the above'],    correct: 2,    level: 2},
            {str: 'The amount of time required for the scheduling dispatcher to stop one process and start another is known as what?',    choices: ['Dispatch latency', 'Event latency', 'Interrupt latency', 'Context switch'],    correct: 0,    level: 1},
            {str: 'Which one of the following is not a valid state of a thread?',    choices: ['Running', 'Parsing', 'Ready', 'Blocked'],    correct: 1,    level: 1},
            {str: 'Which routing technique is used in a distributed system?',    choices: ['Fixed Routing', 'Virtual Routing', 'Dynamic Routing', 'All of the above'],    correct: 3,    level: 3},
            {str: 'What is best solution to have effect of unbounded number if base/bound registers?',    choices: ['Tagged architecture', 'Segmentation', 'Fence method', 'None of the above'],    correct: 1,    level: 3},
            {str: 'The bounded buffer problem is also known as - ',    choices: ['Readers – Writers problem', 'Dining – Philosophers problem', 'Producer – Consumer problem', 'None of the above'],    correct: 2,    level: 2},
            {str: 'If a process is executing in its critical section, then no other processes can be executing in their critical section. This condition is called?',    choices: ['Mutual Exclusion', 'Critical Exclusion', 'Synchronous Exclusion', 'Asynchronous Exclusion'],    correct: 0,    level: 1},
            {str: 'What is the name of the problem encountered in multitasking when a process is perpetually denied necessary resources?',    choices: ['Inversion', 'Aging', 'Deadlock', 'Starvation'],    correct: 3,    level: 1}]